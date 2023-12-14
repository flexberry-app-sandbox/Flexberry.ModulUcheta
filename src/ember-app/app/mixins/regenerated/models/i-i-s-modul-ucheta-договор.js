import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-modul-ucheta-статус'),
  стоимость: DS.attr('number'),
  тип: DS.attr('i-i-s-modul-ucheta-тип-договора'),
  дирОтдПоРабСКл: DS.belongsTo('директор', { inverse: null, async: false }),
  длительность: DS.belongsTo('i-i-s-modul-ucheta-длительность', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-modul-ucheta-клиент', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дирОтдПоРабСКл: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.дирОтдПоРабСКл.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  длительность: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-modul-ucheta-договор.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоговорE', 'i-i-s-modul-ucheta-договор', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    длительность: belongsTo('i-i-s-modul-ucheta-длительность', 'Длительность', {
      длительность: attr('Длительность', { index: 5 })
    }, { index: 4 }),
    стоимость: attr('Стоимость', { index: 6 }),
    дирОтдПоРабСКл: belongsTo('директор', 'Фамилия директора', {
      имя: attr('Имя директора', { index: 8 }),
      отчество: attr('Отчество директора', { index: 9 })
    }, { index: 7, displayMemberPath: 'фамилия' }),
    клиент: belongsTo('i-i-s-modul-ucheta-клиент', 'Фамилия клиент', {
      имя: attr('Имя клиент', { index: 11 }),
      отчество: attr('Отчество клиент', { index: 12 })
    }, { index: 10, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('ДоговорL', 'i-i-s-modul-ucheta-договор', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 }),
    длительность: belongsTo('i-i-s-modul-ucheta-длительность', 'Длительность', {
      длительность: attr('Длительность', { index: 5 })
    }, { index: -1, hidden: true }),
    дирОтдПоРабСКл: belongsTo('директор', 'Фамилия директора', {
      фамилия: attr('Фамилия директора', { index: 6 })
    }, { index: -1, hidden: true }),
    клиент: belongsTo('i-i-s-modul-ucheta-клиент', 'Фамилия клиента', {
      фамилия: attr('Фамилия клиента', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
