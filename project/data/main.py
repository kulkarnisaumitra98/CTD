import sys, os
from sandy import sandy_func
from comparator import compare

path = 'data/users_code'
base_dir = os.path.dirname(os.path.abspath(__file__))
user_dir = base_dir + "/users_code"
error_dir = base_dir + "/users_code"
testcaseScore_dir = base_dir + "/standard/testcaseScore"
des_dir = base_dir + "/standard/description"
input_dir = base_dir + "/standard/input"
output_dir = base_dir + "/standard/output"


def run_testcase(i, exec_file, username, qid, user_attempts, JS):
    in_file = "{}/question{}/input{}.txt".format(input_dir, qid, i + 1)
    in_file_fd = open(in_file, "r")
    user_out = '{}/{}/question{}/output{}{}.txt'.format(path, username, qid, user_attempts, i + 1)
    user_out_fd = os.open(user_out, os.O_RDWR | os.O_CREAT)  # user output after running
    des_file = "{}/{}/{}.txt".format(des_dir, qid, str(i))   # descrption file memory and time
    des_fd = open(des_file, "r")
    lines = des_fd.readlines()
    time = lines[0].strip()
    mem = lines[1].strip()  # memory
    des_fd.close()

    res = sandy_func(exec_file, in_file_fd, user_out_fd, time, mem) # stores the code
    in_file_fd.close()

    os.close(user_out_fd)
    expected_out = "{}/question{}/expected_output{}.txt".format(output_dir, qid, i + 1)

    if res == 1:    # if success compile then compare outputs
        res = compare(i, user_out, expected_out, JS)
        
    return res


def compile(src_userfile, exec_file, ext, err):
    a = 1
    if ext == 'c':
        a = os.system("gcc " + src_userfile + " -o " + exec_file + " -lm 2>" + err)
    elif ext == "cpp":
        a = os.system("g++ " + src_userfile + " -o " + exec_file + " -lm 2>" + err)
    return a


def main():
    filename = sys.argv[1]
    ext = sys.argv[1].split(".")[-1]  # file type c or cpp
    username = sys.argv[2]
    qid = sys.argv[3]
    juniorSenior = sys.argv[4]
    attempts = int(sys.argv[5])

    # print uid,qid,sid

    src_userfile = filename # filename of .c file
    exec_file = filename.split(".")[0]  # executable file

    error_file = error_dir+"/"+username+"/error{}.txt".format(qid)    # need to check existence before using
    res = []

    if not os.path.isfile(error_file):    # create error.txt
        error_fd=os.open(error_file, os.O_RDONLY|os.O_CREAT)
        os.close(error_fd)
    else:
        os.remove(error_file)
        error_fd = os.open(error_file, os.O_RDONLY | os.O_CREAT)
        os.close(error_fd)
    #
    a = compile(src_userfile, exec_file, ext, error_file)  # exec_file created after compilation

    user_attempts = attempts

    if a == 0:
        os.remove(error_file)   # removes files only not directory removedirs to remove dir
        for i in range(0, 5):
            r = run_testcase(i, exec_file, username, qid, user_attempts, juniorSenior)
            res.append(r)
    else:
        res = -89      # if compile error then return -89

    return res


a = main()

ans = 0

if a != -89:
    for i in range(0, 5):
        if a[i] < 0:
            a[i] = -a[i]
        if a[i] < 10:
            a[i] = a[i] * 10
        ans = ans * 100 + a[i]  # store the result like 8989898989 corresponding to 5 testcase results which are resp
        # codes from sandbox eg. 1070109910
else:
    ans = 8989898989    # if compile error

f = open("test.txt", "w")
print(ans)
f.write(str(ans))
sys.exit(0)
# 10 = right answer
# 99 = wrong anwer
# 89 = compile tile error
# 50  = TLE
# 70 = Abnormal termination
# 10 = Standard input
# 20 = custom
