from pytube import Playlist
# URL of the public YouTube playlist
playlist_url = "" # insert youtube playlist

playlist = Playlist(playlist_url)

# Iterate over all videos in the playlist and print their URLs
print(f"Playlist Title: {playlist.title}")
for video in playlist.videos:
    print(video.watch_url)