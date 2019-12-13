<template>
    <div>
        <div class="card-body">
            <div id="table" class="table-editable">
                <div class="card-header text-center font-weight-bold text-uppercase py-1">
                    <h3 class="font-weight-bold text-uppercase py-1">Таблица</h3>
                    <span class="table-add float-right mb-3 mr-2"><a class="text-success"><i
                            class="fas fa-plus fa-2x" aria-hidden="true"></i></a></span>
                    <div class="input-group md-form form-sm form-2 pl-0 col-md-3"
                         style="margin:10px; left:70%;">
                        <input v-model="name" id="searchinput" type="search" class="form-control" placeholder="Search">
                        <span class="input-group-btn"></span>
                        <span v-on:click="openClick" style="float: right; margin-left: 15%;"><eva-icon
                                name="folder-add-outline"></eva-icon>
                    </span>
                    </div>
                </div>

                <table class="table table-bordered table-responsive-md table-striped text-center">
                    <thead>
                    <tr>
                        <th class="text-center">Id</th>
                        <th class="text-center">Имя</th>
                        <th class="text-center">Фамилия</th>
                        <th class="text-center">Эл. адрес</th>
                        <th class="text-center">Контакт</th>
                        <th class="text-center">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="education in listEducation">
                        <td>{{education.id}}</td>
                        <td>{{education.firstName}}</td>
                        <td>{{education.lastName}}</td>
                        <td>{{education.email}}</td>
                        <td>{{education.phone}}</td>
                        <td>
                            <eva-icon name="trash-2" @click="deletePost(education.id)"></eva-icon>
                            <eva-icon name="edit-2" v-on:click="updateModal(education.id)"></eva-icon>
                            <router-link to="#">
                                <eva-icon name="eye"></eva-icon>
                            </router-link>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>


        <b-modal hide-footer ok-title="Save" v-model="openClickModel">

            <template slot="modal-header">

                <h5 style="margin-left: 27%">Добавить отдел</h5>
            </template>

            <div class="col-md-10" style="padding-left: 10%">
                <b-form-input id="input-small" v-model="payloads.firstName" size="sm"
                              placeholder="Имя"></b-form-input>
                <br>
                <b-form-input id="input-small" v-model="payloads.lastName" size="sm"
                              placeholder="Фамилия"></b-form-input>
                <br>
                <b-form-input id="input-small" v-model="payloads.email" size="sm"
                              placeholder="Эл. адрес"></b-form-input>
                <br>
                <b-form-input id="input-smalle" v-model="payloads.phone" size="sm"
                              placeholder="Контакт"></b-form-input>
                <br>

                <button @click="ModalClick(payloads.id)" class="btn btn-success col-md-10" style="left:30px">сохранять
                    <eva-icon name="save"></eva-icon>
                </button>

            </div>


        </b-modal>


    </div>

</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {

        data() {
            return {


                deleteRes: true,
                openClickModel: false,
                educations: [],
                name: '',
                payloads: {
                    id: '',
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: ''

                }
            }
        },
        computed: {
            ...mapState('education', [
                'listEducation'
            ]),

        },

        methods: {
            ...mapActions('education', [
                'getEducationsStore', 'deleteStoreEducation', 'getByNameEducation', 'saveEducationStore',
                'updateEDUStore', 'updatePost'

            ]),

            async updateModal(id) {
                await this.updateEDUStore(id);
                this.payloads = this.getById;
                this.openClickModel = true;

            },

           async ModalClick() {
                if (this.payloads.id) {
                await this.updatePost(this.payloads);
                    this.openClickModel = false;

                } else {
                    this.saveClick();
                    this.payloads.id = null;
                }
            },


            async saveClick() {
               await this.saveEducationStore(this.payloads);
                this.openClickModel = false;
              await  this.getEducationsStore();

            },

            openClick() {

                this.payloads.firstName = '',
                    this.payloads.lastName = '',
                    this.payloads.email = '',
                    this.payloads.phone = '',
                    this.openClickModel = true;

            },

            async deletePost(id) {
                await this.deleteStoreEducation(id);
                await this.getEducationsStore();

            },


        },

        created() {
            this.getEducationsStore();
        },

        watch: {
            'name': {
                handler(newValue) {
                    if (this.name == '') {
                        this.getEducationsStore();
                    } else {
                        // debugger
                        this.getByNameEducation(newValue);

                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
