const videoItems = document.querySelectorAll('.video-item');

videoItems.forEach(item => {
  const showBtn = item.querySelector('.show-btn');
  const hideBtn = item.querySelector('.hide-btn');
  const video = item.querySelector('.video');

  showBtn.addEventListener('click', () => {
    video.style.display = 'block';
    video.play();
  });

  hideBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    video.style.display = 'none';
  });
});
