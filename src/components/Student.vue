<template>
    <div>

        <div class="card-body">
            <div id="table" class="table-editable">
                <div class="card-header text-center font-weight-bold text-uppercase py-1">
                    <h3 class="font-weight-bold text-uppercase py-1">Таблица Студент</h3>
                    <span class="table-add float-right mb-3 mr-2"><a class="text-success">
                        <button v-if="0 < selected.length" class="btn btn-danger" style="margin-left:-2400px; position: static" @click="deleteOpenAll()">DeleteStudent</button><i
                            class="fas fa-plus fa-2x" aria-hidden="true"></i></a></span>
                    <div class="input-group md-form form-sm form-2 pl-0 col-md-3"
                         style="margin:10px; left:70%;">
                        <input v-model="name" id="searchinput" type="search" class="form-control" placeholder="Search">
                        <span class="input-group-btn"></span>
                        <span v-on:click="openClicButton" style="float: right; margin-left: 15%;"><eva-icon
                                name="folder-add-outline"></eva-icon>
                    </span>
                    </div>
                </div>

                <table class="table table-bordered table-responsive-md table-striped text-center">
                    <thead>
                    <tr>
                        <th>
                        <label class="form-checkbox">
                            <input type="checkbox" v-model="selectAll" @click="select">
                            <i class="form-icon"></i>
                        </label>
                    </th>

                        <th class="text-center">Id</th>
                        <th class="text-center">Имя</th>
                        <th class="text-center">Фамилия</th>
                        <th class="text-center">Эл. адрес</th>
                        <th class="text-center">Контакт</th>
                        <th class="text-center">Деканат</th>
                        <th class="text-center">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="student in listStudent" class="tdChange">
                        <td>
                            <label class="form-checkbox">
                                <input type="checkbox" :value="student.id" v-model="selected">
                                <i class="form-icon"></i>
                            </label>
                        </td>
                        <td>{{student.id}}</td>
                        <td>{{student.firstName}}</td>
                        <td>{{student.lastName}}</td>
                        <td>{{student.email}}</td>
                        <td>{{student.phone}}</td>
                        <td>{{student.dekanatName}}</td>
                        <td>
                            <eva-icon name="trash-2" @click="deleteOpen(student)"></eva-icon>
                            <eva-icon name="edit-2" @click="findByStudent(student.id)"></eva-icon>
                            <router-link to="#">
                                <eva-icon name="eye"></eva-icon>
                            </router-link>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>


        <b-modal hide-footer ok-title="Save" v-model="AddModal">

            <template slot="modal-header">

                <h5 style="margin-left: 27%">Добавить</h5>
            </template>

            <div class="col-md-10" style="padding-left: 20%">
                <b-form-input id="input-small" v-model="payloads.firstName" size="sm"
                              placeholder="Имя">
                </b-form-input>
                <br>
                <b-form-input id="input-small" v-model="payloads.lastName" size="sm"
                              placeholder="Фамилия"></b-form-input>
                <br>
                <b-form-input id="input-small" v-model="payloads.email" size="sm"
                              placeholder="Эл. адрес"></b-form-input>
                <br>
                <b-form-input id="input-smalle" v-model="payloads.phone" size="sm"
                              placeholder="Контакт"></b-form-input>

                <div class="form-group col-md-10" style="margin-left:10%"><br>
                    <b-form-select
                            v-model="payloads.dekanatId"
                            :options="dropdowns.dekanat.items"
                            :text-field="'name'"
                            :value-field="'id'"
                    >
                    </b-form-select>
                </div>

                <button @click.once="TestModal(payloads.id)"  class="btn btn-success col-md-10" style="left:30px">сохранять
                    <eva-icon name="save"></eva-icon>
                </button>

            </div>


        </b-modal>



        <b-modal hide-footer ok-title="Save" v-model="Askdelete">

            <template slot="modal-header">
                <h5 style="margin-left: 30%">Вы хотите удалить</h5>
            </template>
           <div style="text-align: center; font-family: Arial; font-weight: bolder">
               {{spanMassage}}

               <p>{{deleteItem.firstName}}</p>
               <p>{{deleteItem.lastName}}</p>
               <p>{{deleteItem.email}}</p>
               <p>{{deleteItem.phone}}</p>
               <p>{{deleteItem.dekanatName}}</p>
           </div>

            <button @click.once="Askdelete = !Askdelete"
                    class="btn btn-primary" style="margin-left: 15%; margin-top: 10px; padding: 5px 20px">
                <eva-icon name="alert-circle-outline"></eva-icon> отменить
            </button>

            <button @click="deleteStudent(deleteItem)" class="btn btn-danger" style="margin-left: 55%; margin-top: -65px; padding: 5px 25px">удалять
                    <eva-icon name="trash"></eva-icon>
                </button>




        </b-modal>



    </div>
</template>

<script>

    import {mapActions, mapState} from "vuex";

    export default {
        data() {
            return {
                spanMassage:'',
                selected: [],
                selectAll: false,
                deleteAllStudent:[],
                name:'',
                students: [],
                deleteItem:'',
                Askdelete: false,
                deleteRes: false,
                AddModal: false,
                payloads: {
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    dekanatId: null
                },
                dropdowns: {
                    dekanat: {
                        items: [],
                        value: null,
                    }
                }

            }
        },

        computed: {
            ...mapState('dekanat', [
                'listDekanat',
            ]),


            ...mapState('Student', [
                'listStudent','testSave','findByIdStudent'
            ]),


        },

        methods: {

            ...mapActions('dekanat', [
                'getDekanatStore',
            ]),


            ...mapActions('Student', [
                'getStudentStore',
                'postStudentStore',
                'deleteStudentStore',
                'findByIdStudentStore',
                'putStudentStore',
                'getByNameStudentStore'
            ]),
            select() {
                this.selected = [];
                if (!this.selectAll) {
                    for (let i in this.listStudent) {
                        this.selected.push(this.listStudent[i].id);
                    }
                }
                },



                openClicButton() {
                this.AddModal = true;
                this.dropdowns.dekanat.items = this.listDekanat;

                this.payloads.firstName = '';
                this.payloads.lastName = '';
                this.payloads.email = '';
                this.payloads.phone = '';
                this.payloads.id = null;

            },

            TestModal(id){
                if (this.payloads.id) {
                    debugger
                    this.putStudentStore(this.payloads);
                    this.AddModal = false;
                    this.getStudentStore();


                } else {
                    this.saveAllStudent();
                    this.payloads.id = null;
                    this.getStudentStore();

                }
                this.getStudentStore();


            },



           async saveAllStudent() {
                debugger
               await this.postStudentStore(this.payloads);
                if (this.testSave){
                   await this.getStudentStore();
                }
                this.AddModal = false;

            },

            deleteOpen(student){
                this.deleteItem = student;
              this.Askdelete = true;
            },

            deleteOpenAll(){
                this.spanMassage = 'Вы хотите удалить все';
              this.Askdelete = true;
            },

         async deleteStudent(student) {
             this.deleteItem = [];
             this.Askdelete = false;
             if (this.selected.length === 0) {
                 await this.deleteStudentStore(student.id);
             }else {debugger
                 await this.deleteStudentStore(this.selected);
             this.selected = [];}
             if (this.testSave){
                 await this.getStudentStore();
             }
                },

          async findByStudent(id){
             await this.findByIdStudentStore(id);
              this.AddModal = true;
              debugger
             this.payloads =await this.findByIdStudent;
              debugger
              this.dropdowns.dekanat.items = this.listDekanat;

            }




        },

        created() {
            this.getStudentStore();
            this.getDekanatStore();


        },
        watch: {
            'name': {
                handler(newValue) {
                    if (this.name == '') {
                        this.getStudentStore();
                    } else {
                        debugger
                        this.getByNameStudentStore(newValue);

                    }
                }
            }
        }

    }
</script>

<style scoped>
    .tdChange td{
        padding: 5px 10px;
    }

</style>
