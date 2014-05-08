QM.Fabricators.Parcels = {
  defaults: {
    parcels: {

    }
  },

  fabricate: function(options) {
    var parcels = new QM.Collections.Parcels(),
      settings = _.extend({}, this.defaults, options),
      i;

    for(i = 0; i < QM.Collections.Parcels.MAX_NUM_PARCEL; i++) {
      parcels.add(QM.Fabricators.Parcel.fabricate(settings));
    }

    return parcels;
  }
};