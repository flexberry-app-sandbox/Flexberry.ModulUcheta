import { Serializer as ДирОтдПоРабСКлSerializer } from
  '../mixins/regenerated/serializers/директор';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДирОтдПоРабСКлSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
