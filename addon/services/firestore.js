import Service from "@ember/service";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default Service.extend({
  firebase: service(),
  instance: computed("firebase", function() {
    return this.get("firebase").firestore();
  })
});
