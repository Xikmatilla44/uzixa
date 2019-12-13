import Vue from 'vue';
import Vuex from 'vuex';
import { education } from "./education.module";
import { dekanat } from "./dekanat.module";
import { SecurtyModule } from "./module/Securty.Module";
import { Student } from "./module/Student.Module";
import { Kafedra } from "./module/Kafedra.Module";

Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        education,
        dekanat,
        SecurtyModule,
        Student,
        Kafedra
    }
});

export default store;

