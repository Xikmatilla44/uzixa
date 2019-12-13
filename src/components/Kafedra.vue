<template>
    <div>

        <div class="card-body">
            <div id="table" class="table-editable">
                <div class="card-header text-center font-weight-bold text-uppercase py-1">
                    <h3 class="font-weight-bold text-uppercase py-1">Kafedra</h3>
                    <span class="table-add float-right mb-3 mr-2"><a class="text-success">
                        <i class="fas fa-plus fa-2x" aria-hidden="true"></i></a></span>
                    <div class="input-group md-form form-sm form-2 pl-0 col-md-3"
                         style="margin:10px; left:70%;">
                        <input id="searchinput" type="search" class="form-control" placeholder="Search">
                        <span class="input-group-btn"></span>
                        <span style="float: right; margin-left: 15%;"><eva-icon @click="saveModal()"
                                                                                name="folder-add-outline"></eva-icon>
                    </span>
                    </div>
                </div>

                <table class="table table-bordered table-responsive-md table-striped text-center">
                    <thead>
                    <tr>
                        <th>
                            <label class="form-checkbox">
                                <input type="checkbox">
                                <i class="form-icon"></i>
                            </label>
                        </th>

                        <th class="text-center">Id</th>
                        <th class="text-center">Имя</th>
                        <th class="text-center">Active</th>
                        <th class="text-center">Деканат</th>
                        <th class="text-center">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="kafedra in AllKafedra" class="tdChange">
                        <td>
                            <label class="form-checkbox">
                                <input type="checkbox">
                                <i class="form-icon"></i>
                            </label>
                        </td>
                        <td>{{kafedra.id}}</td>
                        <td>{{kafedra.name}}</td>
                        <td>{{kafedra.holati}}</td>
                        <td>{{kafedra.dekanatName}}</td>
                        <td>
                            <eva-icon name="trash-2"></eva-icon>
                            <eva-icon name="edit-2"></eva-icon>
                            <router-link to="#">
                                <eva-icon name="eye"></eva-icon>
                            </router-link>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>

        <b-modal hide-footer ok-title="Save" v-model="modalOpen">


            <div class="col-md-10" style="padding-left: 20%">
                <b-form-input id="input-small"
                              style="padding: 15px"
                              v-model="kafedraValue.name" size="sm"
                              placeholder="Имя"
                >
                </b-form-input>
            </div>

            <div class="form-group col-md-8" style="margin-left:17%"><br>
                <b-form-select
                        v-model="kafedraValue.dekanatId"
                        :options="dropdowns.dekanat.items"
                        :text-field="'name'"
                        :value-field="'id'"
                >
                </b-form-select>
            </div>

            <button class="btn btn-success col-md-10" style="left:30px" @click.once="SaveKafedra()">сохранять
                <eva-icon name="save"></eva-icon>
            </button>


        </b-modal>


    </div>
</template>

<script>

    import {mapActions, mapState} from "vuex";

    export default {

        data() {
            return {

                kafedraValue: {
                    id: '',
                    name: '',
                    holati: '',
                    dekanatId: null

                },
                dropdowns: {
                    dekanat: {
                        items: [],
                        value: null,
                    }
                },

                modalOpen: false,
            }
        },
        computed: {
            ...mapState('Kafedra', [
                'AllKafedra'
            ]),

            ...mapState('dekanat', [
                'listDekanat',
            ]),


        },

        methods: {
            ...mapActions('Kafedra', [
                'getKafedraStore', 'postKafedraStore'
            ]),

            ...mapActions('dekanat', [
                'getDekanatStore',
            ]),

            saveModal() {
                this.dropdowns.dekanat.items = this.listDekanat;
                this.modalOpen = true;
            },

            SaveKafedra(){
                debugger
                this.postKafedraStore(this.kafedraValue);
                this.kafedraValue.name = '',
                this.kafedraValue.holati = '',
                this.kafedraValue.dekanatId = '',
                this.kafedraValue.id = ''


            }


        },

        created() {
            this.getKafedraStore();
            this.getDekanatStore();
        }


    }
</script>

<style scoped>

    .tdChange td {
        padding: 1px 5px;
    }

    .form-checkbox {
        padding: -1px 5px;
    }

</style>
