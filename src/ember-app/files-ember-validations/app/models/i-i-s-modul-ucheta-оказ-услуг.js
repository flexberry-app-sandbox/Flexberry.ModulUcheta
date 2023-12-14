import {
  defineNamespace,
  defineProjections,
  Model as ОказУслугMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-оказ-услуг';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОказУслугMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
