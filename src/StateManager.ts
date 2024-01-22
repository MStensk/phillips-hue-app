import { ref } from 'vue';

interface AppState {
  selectedRoom: {
    id: number | null;
    caption: string | null;
    lightCount: string | null;
  };
}

const state = ref<AppState>({
  selectedRoom: {
    id: null,
    caption: null,
    lightCount: null,
  },
});

const setSelectedRoom = (id: number, caption: string, lightCount: string) => {
  state.value.selectedRoom = { id, caption, lightCount };
};

const clearSelectedRoom = () => {
  state.value.selectedRoom = {
    id: null,
    caption: null,
    lightCount: null,
  };
};

export { state, setSelectedRoom, clearSelectedRoom };