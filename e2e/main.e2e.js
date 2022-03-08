/* global element, describe, beforeAll, it, by, device, beforeEach expect */

import {setDeviceLocation} from './helpers';

describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  beforeAll(async () => {
    await device.launchApp({
      permissions: {notifications: 'YES', location: 'inuse'},
    });
  });

  it('should show user name', async () => {
    await expect(element(by.id('userName'))).toBeVisible();
  });

  it('link should have "Rewards" text', async () => {
    await expect(element(by.id('rewardsLink'))).toBeVisible();
    await expect(element(by.id('rewardsLinkText'))).toHaveText('Rewards');
  });

  it('should show rewards view', async () => {
    const stepsLink = element(by.id('rewardsLink'));
    await expect(stepsLink).toBeVisible();
    await stepsLink.tap();

    await expect(element(by.text('Back'))).toBeVisible();
  });

  it('should show steps', async () => {
    const steps = element(by.id('steps'));
    await expect(steps).toBeVisible();
    await expect(steps).toHaveText('0');
  });

  it('should increments steps', async () => {
    await device.shake();
    const steps = element(by.id('steps'));

    await expect(steps).toHaveText('2');
  });

  it('should show rewards view and back to home', async () => {
    const stepsLink = element(by.id('rewardsLink'));
    await stepsLink.tap();
    await expect(stepsLink).toNotExist();
    await element(by.text('Back')).tap();

    await expect(element(by.text('Your steps'))).toBeVisible();
    await expect(element(by.text('Back'))).toNotExist();
  });

  it('should show water view with localization permission denied', async () => {
    await expect(element(by.text("Today's weather"))).toBeVisible();
    await expect(
      element(by.text('Please Allow Geolocalization')),
    ).toBeVisible();
  });

  it('should show water view with localization allowed', async () => {
    await setDeviceLocation(32.0853, 34.7818);
    await expect(element(by.text("Today's weather"))).toBeVisible();
  });
});
