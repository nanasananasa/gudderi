import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:10000/api',
  timeout: 10000,
});

//TODO: 環境に応じて変数を切り分ける
//TODO: SpringのXSRFトークンの設定を入れる
export default instance;
