<template>
    <v-dialog v-model="modal">
       <v-card max-width="360" class="mx-auto w-full">
         <v-card-text>
           <div class="flex justify-between">
             <div></div>
             <div class="text-center font-semibold">Add new card</div>
             <div @click="modal=false">&#10005</div>
           </div>
         </v-card-text>
         <v-divider></v-divider>
         <v-card-text>
           <v-form>
             <label class="text-sm" for="">Card number</label>
             <v-text-field
               name="currentEmail"
               placeholder="Enter card number"
               id="id"
               model-value="example@"
              
               variant="outlined" type="number" append-inner-icon="mdi-credit-card-outline"
               density="compact"
             ></v-text-field>
             <label class="text-sm" for="">Card holder name</label>
             <v-text-field
               name="currentEmail"
               placeholder="Card holder full name"
               id="id" type="password"
               variant="outlined"
               append-inner-icon="mdi-account-circle-outline"
               density="compact"
             ></v-text-field>
             <div class=" grid grid-cols-2 gap-x-2">
                <div>
                    <label class="text-sm" for="">Re-enter password</label>
                    <v-text-field
                      name="currentEmail"
                      placeholder="MM/YY"
                      id="id" type="password"
                      variant="outlined"
                      append-inner-icon="mdi-calendar-range"

                      density="compact"
                    ></v-text-field>
                </div>
                <div>
                    <div>
                    <label class="text-sm" for="">CVC/CVV</label>
                    <v-text-field
                      name="currentEmail"
                      placeholder="****"
                      id="id" type="password"
                      variant="outlined"
                      append-inner-icon="mdi-lock-outline"
                      density="compact"
                    ></v-text-field>
                </div>
                </div>
             </div>
            
           </v-form>
         </v-card-text>
         <v-divider></v-divider>
         <v-card-actions>
           <div class="flex w-full justify-end gap-x-4 py-2">
             <div>
               <v-btn color="" variant="outlined" @click="modal=false">
                 <div class="normal-case font-normal text-gray-800">
                   Cancel
                 </div>
               </v-btn>
             </div>
             <div>
               <v-btn color="" class="bg-secondaryBg w-fit" block @click="modal=false"
               >
               <div class="normal-case font-normal">
                 Save changes
               </div>
               </v-btn
               >
             </div>
           </div>
         </v-card-actions>
       </v-card>
     </v-dialog>
 </template>
 
 <script>
export default {
  props: ["show"],
  data() {
    return {
      modal: this.show,
    };
  },
  watch: {
    show(value) {
      this.modal = value;
    },
    modal(value) {
      if (value == false) {
        this.$emit("close");
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>