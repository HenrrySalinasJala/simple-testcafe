import faker from 'faker'
import HomePageActions from '../main/actions/home.actions'
import GetStartedPageActions from '../main/actions/get_started.actions'

const homePageActions = new HomePageActions()
const getStartedActions = new GetStartedPageActions()

/**
  go to > business.aa.com
  go to get started
  verify modal is displayed
  fill form in modal
  CLick next
  Verify Success modal
  Validate for email modal
  Validate for email text
 */

fixture('Dummy suite 1')


test('Dummy test should fail', async (t) => {
  await new Promise(resolve => setTimeout(resolve, 200))
  await t.expect(false).ok('This test should fail')
})

test('Dummy test 1 should pass', async (t) => {
  await new Promise(resolve => setTimeout(resolve, 200))
  await t.expect(true).ok('This test should pass')
})

test.skip('Dummy test should skip', async (t) => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  await t.expect(false).ok('This test should skip')
})

test('Dummy test 2 should pass', async (t) => {
  await new Promise(resolve => setTimeout(resolve, 200))
  await t.expect(true).ok('This test should pass')
})

test('Dummy test 3 should pass', async (t) => {
  await new Promise(resolve => setTimeout(resolve, 200))
  await t.expect(true).ok('This test should pass')
})

test('Dummy test 4 should pass', async (t) => {
  await new Promise(resolve => setTimeout(resolve, 200))
  await t.expect(true).ok('This test should pass')
})

test('Dummy test 5 should pass', async (t) => {
  await new Promise(resolve => setTimeout(resolve, 200))
  await t.expect(true).ok('This test should pass')
})