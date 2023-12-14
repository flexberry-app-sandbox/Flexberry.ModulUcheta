import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-modul-ucheta-услуги', 'Unit | Serializer | i-i-s-modul-ucheta-услуги', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-modul-ucheta-услуги',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-modul-ucheta-статус',
    'transform:i-i-s-modul-ucheta-тип-договора',
    'transform:i-i-s-modul-ucheta-услуга',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
