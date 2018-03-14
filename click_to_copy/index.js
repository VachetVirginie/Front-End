function clickToCopy() {
    var copyBtn = $('.click-to-copy');
    copyBtn.on('click', function(event) {
      var content = $(this);
      var range = document.createRange();
      range.selectNode(content[0]);
      window.getSelection().addRange(range);
  
      try {
        
        var successful = document.execCommand('copy');
        
        $('.click-to-copy__text').text('COPIED, WOOP!');
        $('.click-to-copy__icon').addClass('click-to-copy__success');
         window.getSelection().removeAllRanges();
        
        setTimeout(function() {
          $('.click-to-copy__icon').removeClass('click-to-copy__success');
          $('.click-to-copy__text').text('Test');
        }, 1800);
        
      } catch (err) {
        alert('Press Ctrl/CMD + C to copy this to your clipboard.');
        inp.blur();
      }
  
    });
  }
  
  clickToCopy();
  