fis.match('*', {
  useHash: false
});

fis.match('::packager', {
  postpackager: fis.plugin('loader', {
    //allInOne: true
  })
});

fis.match('*.{css,less}', {
  packTo: '/static/aio.css'
});

fis.match('*.js', {
	packTo: '/static/aio.js'
});

fis.match('*.less', {
	parser: fis.plugin('less'),
	rExt: '.css'
});
