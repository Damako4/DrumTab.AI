import sys
import demucs.separate
import shlex


if __name__ == "__main__":
    # Read from stdin
    input_file = sys.stdin.read().strip()
    demucs.separate.main(['--mp3', '--two-stems', 'drums', '-v', '-o', '../output', input_file])
    sys.stdout.flush()
