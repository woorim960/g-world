import axios from "axios";
import base64 from "base-64";

const ES_URL = "http://192.168.219.142:9200"; // Elasticsearch 인스턴스 URL

// Elasticsearch에서 데이터를 조회하는 함수
export const fetchDataFromES = async (method, path, body = {}) => {
  try {
    const response = await axios({
      method: method,
      url: `${ES_URL}/${path}`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Basic ${base64.encode(`${USERNAME}:${PASSWORD}`)}`,
      },
      data: body,
    });

    console.log("Elasticsearch response:", response.data);
    return response.data.hits.hits; // 실제 검색 결과를 반환합니다
  } catch (error) {
    console.error("Elasticsearch 조회 중 오류 발생:", error);
    // 오류 응답을 확인하려면 error.response를 사용하세요
    throw error; // 오류를 다시 throw하여 호출자에게 전파합니다
  }
};
