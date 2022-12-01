import { viewServices } from "./../types/index";
import { defineStore } from "pinia";
import { pick } from "lodash-es";
import { getModule } from "@alioth/engine ";
export const useServiceState = defineStore("service", {
  state: () => ({
    context: {} as { [key: string]: any },
    services: {} as { [key: string]: string },
    pageServicesName: new Set() as Set<string>,
    dependences: new Set() as Set<string>,
  }),

  getters: {
    pageServices: (state) => {
      return pick(state.services, [...state.pageServicesName]);
    },
    pageDependences: (state) => {
      return [...state.dependences].filter(getModule);
    },
  },
  actions: {
    updateContext(key: string, module: any) {
      this.context[key] = module;
    },
    updateService(key: string, module: any) {
      this.services[key] = module;
    },
    deleteService(key: string) {
      delete this.services[key];
    },
    destruct() {
      this.services = {};
    },
    load(services: viewServices) {
      this.services = services;
    },
  },
});
