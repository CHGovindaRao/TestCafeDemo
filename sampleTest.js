import { Selector } from "testcafe";

fixture('basic tests')
  .page('https://devexpress.github.io/testcafe/example/')
  .beforeEach(async () => {
    await Selector('[body.data-gr-cs-loded=true]');
  });

const nameInput = () => Selector('#developer-name');
const chbx = () => Selector('#remote-testing');
const chbx1 = () => Selector('#background-parallel-testing');
const triedTestCafe = () => Selector('#tried-test-cafe');

test('my sample1 test', async (t) => {
  await t.typeText(nameInput(), 'Learning Test Cafe');
  await t.click(chbx(chbx));
  await t.expect(chbx().checked).ok();
  await t.click(chbx1());
  await t.expect(chbx1().hasClass().eql(''));
  await t.click(triedTestCafe());
});

test('my sample test', async (t) => {
  await t.typeText(nameInput(), 'Learning Test Cafe');
  await t.expect(nameInput().value).eql('Learning');
});

