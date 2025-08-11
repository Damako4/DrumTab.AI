from mido import MidiFile, merge_tracks, tick2second
import matplotlib.pyplot as plt
import numpy as np
import soundfile as sf

# EXAMPLE FILE LOAD
mid = MidiFile('./examples/202_rock-halftime_140_beat_4-4.mid', clip=True)

ticks_per_beat = mid.ticks_per_beat

 # https://magenta.tensorflow.org/datasets/groove 
 # TODO Don't account for dynamics as of now (Edge is equivalent to Bow)
classes = {
    "Kick": [36],
    "Snare": [38, 40],
    "Snare X-Stick": [37],
    "Tom 1": [48, 50],
    "Tom 2": [45, 47],
    "Tom 3": [43, 58],
    "HH Open": [46, 26],
    "HH Closed": [42, 22],
    "HH Pedal": [44],
    "Crash 1": [49, 55],
    "Crash 2": [57, 52],
    "Ride": [51, 59],
    "Ride (Bell)": [53],
}

# TODO Could be multiple tempo changes
track = merge_tracks(mid.tracks)
current_ticks = 0
notes = []
tempo = None
for msg in track:
    current_ticks += msg.time
    if msg.type == 'set_tempo':
        tempo = msg.tempo
    if msg.type == 'note_on' and msg.velocity > 0:
        sec = tick2second(current_ticks, ticks_per_beat, tempo)
        notes.append((msg.note, msg.velocity, sec))

count = 0
for note in sorted(notes, key=lambda n: n[2]):  # sort by time
    for class_name, note_numbers in classes.items():
        if note[0] in note_numbers:
            if count < 5:
                count += 1
                print(f'Class: {class_name}, Note: {note[0]}, Velocity: {note[1]}, Time: {note[2]:.2f} sec')
            break  # stop after finding the matching class


audio, sr = sf.read('./examples/202_rock-halftime_140_beat_4-4.wav')
end_sample = int(sr * 10)
audio_10s = audio[:end_sample]

time_axis = np.linspace(0, 10, end_sample)  # seconds



plt.figure(figsize=(15, 4))
plt.plot(time_axis, audio_10s, label='Audio waveform')
for pitch, vel, sec in notes:
    if sec <= 10:
        plt.axvline(x=sec, color='r', linestyle='--', alpha=0.7)
plt.grid()
plt.show()