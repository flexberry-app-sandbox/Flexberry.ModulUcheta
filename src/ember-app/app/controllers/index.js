import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.modul-ucheta.caption'),
          title: i18n.t('forms.application.sitemap.modul-ucheta.title'),
          children: [{
            link: 'i-i-s-modul-ucheta-услуги-l',
            caption: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-услуги-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-длительность-l',
            caption: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-длительность-l.caption'),
            title: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-длительность-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-договор-l',
            caption: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-договор-l.title'),
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-дир-отд-по-раб-с-кл-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-клиент-l',
            caption: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-клиент-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-затр-время-l',
            caption: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-затр-время-l.caption'),
            title: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-затр-время-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.modul-ucheta.i-i-s-modul-ucheta-расчет-ост-врем-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})