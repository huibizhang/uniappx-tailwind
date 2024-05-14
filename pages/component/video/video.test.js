describe('component-native-video', () => {
  if(process.env.uniTestPlatformInfo.startsWith('web')){
    // TODO: web 端暂不支持测试
    it('web', async () => {
      expect(1).toBe(1)
    })
    return
  }
  let page;
  beforeAll(async () => {
    page = await program.reLaunch('/pages/component/video/video');
    if(process.env.uniTestPlatformInfo.startsWith('web')){
      await page.setData({
        muted: true
      });
    }
    await page.waitFor(1000);
  });

  it('test API', async () => {
    expect(await page.data('isError')).toBe(false);
    // play
    await page.callMethod('play');
    await page.waitFor(100);
    expect(await page.data('isPlaying')).toBe(true);
    // pause
    await page.callMethod('pause');
    await page.waitFor(100);
    expect(await page.data('isPause')).toBe(true);
  });

  it('test local source', async () => {
  	  await page.callMethod('downloadSource');
  	  await page.waitFor(5000);
  	  expect(await page.data('isError')).toBe(false);
  	  await page.setData({
  		  localSrc: '/static/test-video/2minute-demo.m3u8'
  	  });
  	  await page.waitFor(100);
  	  expect(await page.data('isError')).toBe(false);
  	  await page.setData({
  		  autoTest: false
  	  });
  });

  it('test format', async () => {
    page = await program.navigateTo('/pages/component/video/video-format');
    await page.waitFor(1000);
    expect(await page.data('isError')).toBe(false);
  });
});
