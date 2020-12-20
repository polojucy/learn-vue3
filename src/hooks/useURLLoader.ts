import { reactive, toRefs, } from 'vue'
import axios from 'axios'

function useURLLoader(url: string) {
    const data = reactive({
        result: null,
        loading: true,
        loaded: false,
        error: null,
    })

    axios.get(url).then((res) => {
        data.loading = false
        data.loaded = true
        data.result = res.data
    }).catch((e) => {
        data.error = e
        data.loading = false
    })
    return { ...toRefs(data) }
}

export default useURLLoader