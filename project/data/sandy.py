import sys, os

try:
    # check platform type
    system, machine = os.uname()[0], os.uname()[4]
    if system not in ('Linux',) or machine not in ('i686', 'x86_64',):
        raise AssertionError("Unsupported platform type.\n")
    # check package availability / version
    import sandbox

    if not hasattr(sandbox, '__version__') or sandbox.__version__ < "0.3.4-3":
        raise AssertionError("Unsupported sandbox version.\n")
    from sandbox import *
except ImportError:
    sys.stderr.write("Required package(s) missing.\n")
    sys.exit(os.EX_UNAVAILABLE)
except AssertionError as e:
    sys.stderr.write(str(e))
    sys.exit(os.EX_UNAVAILABLE)


def sandy_func(exec_file, in_file_fd, user_out_fd, time, mem):
    cookbook = {
        'args': exec_file,  # targeted program
        'stdin': in_file_fd,  # input to targeted program
        'stdout': user_out_fd,  # output from targeted program
        'stderr': sys.stderr,  # error from targeted program
        'quota': dict(wallclock=2000,  # 30 sec
                      cpu=1000,  # 2 sec
                      memory=int(mem),  # 256 MB
                      disk=104857600)
    }  # 1 MB
    # create a sandbox instance and execute till end
    msb = sandbox.Sandbox(**cookbook)
    msb.run()
    # print "\n"
    d = Sandbox.probe(msb)
    d['cpu'] = d['cpu_info'][0]
    d['mem'] = d['mem_info'][1]
    d['result'] = msb.result
    return msb.result