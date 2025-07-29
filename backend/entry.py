import sys
import demucs


if __name__ == "__main__":
    # Read from stdin
    input_text = sys.stdin.read().strip()
    print(f"{input_text}")
    sys.stdout.flush()
