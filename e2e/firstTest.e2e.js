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

  it('should show text above logo', async () => {
    await expect(element(by.id('logoHeader'))).toBeVisible();
  });

  it('link should have "See weater" text', async () => {
    await expect(element(by.id('weaterLink'))).toBeVisible();
    await expect(element(by.id('weaterLinkText'))).toHaveText('See weater');
  });

  it('link should have "See your steps" text', async () => {
    await expect(element(by.id('stepsLink'))).toBeVisible();
    await expect(element(by.id('stepsLinkText'))).toHaveText('See your steps');
  });

  it('should show steps view', async () => {
    const stepsLink = element(by.id('stepsLink'));
    await expect(stepsLink).toBeVisible();
    await stepsLink.tap();

    await expect(element(by.text('Back to home'))).toBeVisible();
    await expect(element(by.text('Your current steps'))).toBeVisible();

    const steps = element(by.id('steps'));
    await expect(steps).toBeVisible();
    await expect(steps).toHaveText('0');
  });

  it('should increments steps', async () => {
    await element(by.text('See your steps')).tap();
    await device.shake();
    const steps = element(by.id('steps'));

    await expect(steps).toHaveText('2');
  });

  it('should show steps view and back to home', async () => {
    const stepsLink = element(by.id('stepsLink'));
    await stepsLink.tap();
    await expect(stepsLink).toNotExist();
    await element(by.text('Back to home')).tap();

    await expect(element(by.text('See your steps'))).toBeVisible();
    await expect(element(by.text('Back to home'))).toNotExist();
  });

  it('should show water view with localization permission denied', async () => {
    const weaterLink = element(by.id('weaterLink'));
    await expect(weaterLink).toBeVisible();
    await weaterLink.tap();

    await expect(element(by.text('Back to home'))).toBeVisible();
    await expect(element(by.text("Today's weather"))).toBeVisible();
    await expect(
      element(by.text('Please Allow Geolocalization')),
    ).toBeVisible();
  });

  it('should show water view with localization allowed', async () => {
    await setDeviceLocation(32.0853, 34.7818);
    const weaterLink = element(by.id('weaterLink'));
    await expect(weaterLink).toBeVisible();
    await weaterLink.tap();

    await expect(element(by.text('Back to home'))).toBeVisible();
    await expect(element(by.text("Today's weather"))).toBeVisible();

    await waitFor(element(by.id('location')))
      .toBeVisible()
      .withTimeout(5000);

    await expect(element(by.id('location'))).toBeVisible();
    await expect(element(by.id('weatherIcon'))).toBeVisible();
    await expect(element(by.id('weatherTemp'))).toBeVisible();
    await expect(element(by.id('weatherDesc'))).toBeVisible();
    await expect(element(by.id('weatherMain'))).toBeVisible();

    await expect(element(by.text('Feels like:'))).toBeVisible();
    await expect(element(by.id('feelsLike'))).toBeVisible();

    await expect(element(by.text('Humidity:'))).toBeVisible();
    await expect(element(by.id('humidity'))).toBeVisible();

    await expect(element(by.text('Pressure:'))).toBeVisible();
    await expect(element(by.id('pressure'))).toBeVisible();

    await expect(element(by.text('Wind Speed:'))).toBeVisible();
    await expect(element(by.id('windSpeed'))).toBeVisible();
  });
});
