import librosa as lb
import librosa.display
import matplotlib.pyplot as plt


x, sr = lb.load("../output/separated/htdemucs/shed_clip/drums.mp3", mono=True)
print(sr)


n_fft = 512 
hop_length = 128

onset_env = librosa.onset.onset_strength(y=x, sr=sr, hop_length=hop_length, n_fft=n_fft)
onset_frames = librosa.onset.onset_detect(onset_envelope=onset_env, sr=sr,
                                          hop_length=hop_length, backtrack=False,
                                          delta=0.1, wait=10) 
onset_times = librosa.frames_to_time(onset_frames, sr=sr, hop_length=hop_length)

plt.figure(figsize=(20, 4))
librosa.display.waveshow(x, sr=sr)
plt.vlines(onset_times, -1, 1, color='r', linestyle='--')
plt.grid()
plt.show()