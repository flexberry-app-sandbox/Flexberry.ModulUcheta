import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISModul_ucheta_ДирОтдПоРабСКлLForm from './forms/i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l';
import IISModul_ucheta_ДлительностьLForm from './forms/i-i-s-modul-ucheta-длительность-l';
import IISModul_ucheta_ДоговорLForm from './forms/i-i-s-modul-ucheta-договор-l';
import IISModul_ucheta_ЗатрВремяLForm from './forms/i-i-s-modul-ucheta-затр-время-l';
import IISModul_ucheta_КлиентLForm from './forms/i-i-s-modul-ucheta-клиент-l';
import IISModul_ucheta_РасчетОстВремLForm from './forms/i-i-s-modul-ucheta-расчет-ост-врем-l';
import IISModul_ucheta_УслугиLForm from './forms/i-i-s-modul-ucheta-услуги-l';
import IISModul_ucheta_ДирОтдПоРабСКлEForm from './forms/i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-e';
import IISModul_ucheta_ДлительностьEForm from './forms/i-i-s-modul-ucheta-длительность-e';
import IISModul_ucheta_ДоговорEForm from './forms/i-i-s-modul-ucheta-договор-e';
import IISModul_ucheta_ЗатрВремяEForm from './forms/i-i-s-modul-ucheta-затр-время-e';
import IISModul_ucheta_КлиентEForm from './forms/i-i-s-modul-ucheta-клиент-e';
import IISModul_ucheta_РасчетОстВремEForm from './forms/i-i-s-modul-ucheta-расчет-ост-врем-e';
import IISModul_ucheta_УслугиEForm from './forms/i-i-s-modul-ucheta-услуги-e';
import IISModul_ucheta_ДлительностьModel from './models/i-i-s-modul-ucheta-длительность';
import IISModul_ucheta_ДоговорModel from './models/i-i-s-modul-ucheta-договор';
import IISModul_ucheta_КлиентModel from './models/i-i-s-modul-ucheta-клиент';
import IISModul_ucheta_ОказУслугModel from './models/i-i-s-modul-ucheta-оказ-услуг';
import IISModul_ucheta_РасчетОстВремModel from './models/i-i-s-modul-ucheta-расчет-ост-врем';
import IISModul_ucheta_УслугиModel from './models/i-i-s-modul-ucheta-услуги';
import ДиректорModel from './models/директор';
import Затраченное времяModel from './models/затраченное-время';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-modul-ucheta-длительность': IISModul_ucheta_ДлительностьModel,
    'i-i-s-modul-ucheta-договор': IISModul_ucheta_ДоговорModel,
    'i-i-s-modul-ucheta-клиент': IISModul_ucheta_КлиентModel,
    'i-i-s-modul-ucheta-оказ-услуг': IISModul_ucheta_ОказУслугModel,
    'i-i-s-modul-ucheta-расчет-ост-врем': IISModul_ucheta_РасчетОстВремModel,
    'i-i-s-modul-ucheta-услуги': IISModul_ucheta_УслугиModel,
    'директор': ДиректорModel,
    'затраченное-время': Затраченное времяModel
  },

  'application-name': 'Modul_ucheta_',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Modul_ucheta_',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Modul_ucheta_',
          title: 'Modul_ucheta_'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'modul-ucheta': {
          caption: 'Modul_ucheta_',
          title: 'Modul_ucheta_',
          'i-i-s-modul-ucheta-услуги-l': {
            caption: 'Услуги',
            title: ''
          },
          'i-i-s-modul-ucheta-длительность-l': {
            caption: 'Длительность',
            title: ''
          },
          'i-i-s-modul-ucheta-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-modul-ucheta-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-modul-ucheta-затр-время-l': {
            caption: 'Затр время',
            title: ''
          },
          'i-i-s-modul-ucheta-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l': IISModul_ucheta_ДирОтдПоРабСКлLForm,
    'i-i-s-modul-ucheta-длительность-l': IISModul_ucheta_ДлительностьLForm,
    'i-i-s-modul-ucheta-договор-l': IISModul_ucheta_ДоговорLForm,
    'i-i-s-modul-ucheta-затр-время-l': IISModul_ucheta_ЗатрВремяLForm,
    'i-i-s-modul-ucheta-клиент-l': IISModul_ucheta_КлиентLForm,
    'i-i-s-modul-ucheta-расчет-ост-врем-l': IISModul_ucheta_РасчетОстВремLForm,
    'i-i-s-modul-ucheta-услуги-l': IISModul_ucheta_УслугиLForm,
    'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-e': IISModul_ucheta_ДирОтдПоРабСКлEForm,
    'i-i-s-modul-ucheta-длительность-e': IISModul_ucheta_ДлительностьEForm,
    'i-i-s-modul-ucheta-договор-e': IISModul_ucheta_ДоговорEForm,
    'i-i-s-modul-ucheta-затр-время-e': IISModul_ucheta_ЗатрВремяEForm,
    'i-i-s-modul-ucheta-клиент-e': IISModul_ucheta_КлиентEForm,
    'i-i-s-modul-ucheta-расчет-ост-врем-e': IISModul_ucheta_РасчетОстВремEForm,
    'i-i-s-modul-ucheta-услуги-e': IISModul_ucheta_УслугиEForm
  },

});

export default translations;
