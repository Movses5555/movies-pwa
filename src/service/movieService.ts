import Api, { ApiKey, Type} from './Api'
import { FetchMoviesProps } from '../models/redux-models'

const Services = {
  async getAllMovies(props: FetchMoviesProps) {
    const url = `?apikey=${ApiKey}&type=${Type}&s=${props.params.search}&page=${props.params.page}`;
    const response = await Api().get(url, {signal: props.signal})
    return response.data;
  },
  async getParticularMovie(id: string) {
    const url = `?apikey=${ApiKey}&type=${Type}&i=${id}`;
    const response = await Api().get(url)
    return response.data;
  }
}

export default Services;
