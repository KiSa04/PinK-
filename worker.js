self.addEventListener('message', function (e) {
  if (e.data === 'start') {
    setInterval(function () {
      self.postMessage('loadMorePins');
    }, 10000);
  }
});
