import { moduleForModel, test } from 'ember-qunit';

moduleForModel('затраченное-время', 'Unit | Model | затраченное-время', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-modul-ucheta-длительность',
    'model:i-i-s-modul-ucheta-договор',
    'model:i-i-s-modul-ucheta-клиент',
    'model:i-i-s-modul-ucheta-оказ-услуг',
    'model:i-i-s-modul-ucheta-расчет-ост-врем',
    'model:i-i-s-modul-ucheta-услуги',
    'model:директор',
    'model:затраченное-время',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
