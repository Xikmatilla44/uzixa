<template>
    <div id="Dekanat">

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
                        <span v-on:click="openModalClick" style="float: right; margin-left: 15%;"><eva-icon
                                name="folder-add-outline"></eva-icon>
                    </span>
                    </div>
                </div>

                <table class="table table-bordered table-responsive-md table-striped text-center">
                    <thead>
                    <tr>
                        <th class="text-center">Id</th>
                        <th class="text-center">Имя</th>
                        <th class="text-center">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="dekanatList in listDekanat">
                        <td>{{dekanatList.id}}</td>
                        <td>{{dekanatList.name}}</td>
                        <td>
                            <eva-icon name="trash-2" @click="deleteAsk(dekanatList.id)"></eva-icon>
                            <eva-icon name="edit-2" @click="getIdDekanat(dekanatList.id)"></eva-icon>
                            <router-link to="#">
                                <eva-icon name="eye"></eva-icon>
                            </router-link>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>


        <b-modal hide-footer ok-title="Save" v-model="openModal">

            <template slot="modal-header">

                <h5 style="margin-left: 27%">Добавить</h5>
            </template>

            <div class="col-md-10" style="padding-left: 10%">
                <b-form-input id="input-small" v-model="dekanats.name" size="sm">
                    placeholder="Имя">
                </b-form-input>
                <br>

                <button @click="TestModal(dekanats.id)" class="btn btn-success col-md-10" style="left:30px">сохранять
                    <eva-icon name="save"></eva-icon>
                </button>

            </div>
        </b-modal>


        <b-modal hide-footer ok-title="Save" v-model="openDelete">

            <template slot="modal-header">

                <h5 style="margin-left: 27%">Вы хотите удалить</h5>
            </template>

            <button class="btn btn-primary" style="margin-left:70px; padding: 5px 17px"
                    @click="openDelete = !openDelete">
                <eva-icon name="alert-circle-outline"></eva-icon>
                выход
            </button>
            <button class="btn btn-danger" style="margin-left:110px; padding: 5px 15px"
                    @click="deleteDekanatPost()"
            >удалять
                <eva-icon name="trash-outline"></eva-icon>
            </button>


        </b-modal>


    </div>
</template>

<script>

    import {mapActions, mapState} from "vuex";

    export default {
        data() {
            return {
                name:'',
                valueDelete:'',
                openDelete: false,
                erorshow: '',
                openModal: false,
                dekanats: {
                    name: ''
                }


            }
        },

        computed: {

            ...mapState('dekanat', [
                'listDekanat', 'testDekanat', 'getById'
            ]),


        },

        methods: {

            ...mapActions('dekanat', [
                'getDekanatStore',
                'saveDekanatStore',
                'deleteDekanatStore',
                'getByIdDekanatStore',
                'putDekanatStore',
                'getByNameDekanatStore'
            ]),


          async  TestModal() {
                if (this.dekanats.id) {
               await     this.putDekanatStore(this.dekanats);
                    this.openModal = false;
                await    this.getDekanatStore();


                } else {
                    this.saveDekanat();
                    this.dekanats.id = null;
                }
            },
            async saveDekanat() {
                this.saveDekanatStore(this.dekanats);
                this.openModal = false;
                this.getDekanatStore();

            },

            async deleteDekanatPost() {
                await this.deleteDekanatStore(this.valueDelete);
                await this.getDekanatStore();
                this.openDelete = false;

            },

            deleteAsk(id){
             this.valueDelete = id;
             this.openDelete = true;
            },

            async getIdDekanat(id) {
                debugger
                await this.getByIdDekanatStore(id);
                this.dekanats = this.getById;
                this.openModal = true;

            },


            openModalClick() {
                this.openModal = true;
                this.dekanats.name = '';

            }


        },
        async created() {
            await this.getDekanatStore();
        },

        watch: {
            'name': {
                handler(newValue) {
                    if (this.name == '') {
                        this.getDekanatStore();
                    } else {
                        debugger
                        this.getByNameDekanatStore(newValue);

                    }
                }
            }
        }


    }
</script>

<style scoped>

</style>
