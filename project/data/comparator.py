path3 = 'data/standard/testcaseScore'
import os


def compare(i, fname1, fname2, juniorSenior):
    flag = 0
    if os.path.isfile(fname1) and os.path.isfile(fname2):
        # print "in com"
        f1 = open(fname1)
        f2 = open(fname2)
        l = f1.readlines()
        l = [ i.strip() for i in l] 
        m = f2.readlines()
        m = [ i.strip() for i in m]
        if (len(l) == len(m)):
            # print "not same"
            # else:
            for i in range(len(l)):  # check if files of equal length
                if l[i] == m[i]:
                    flag = 1
                else:
                    flag = 0
                    break
            if flag == 1:
                # print "same"
                return flag
            else:
                # print "not same"
                flag = -99
                return flag

        return -99
