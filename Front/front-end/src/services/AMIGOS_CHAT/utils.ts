export const handlePlayNotificationSound = () => {
    const audio = document.getElementById('notification-sound') as HTMLAudioElement;

    if (!audio.paused) {
        audio.currentTime = 0;
    }

    audio.play();
}