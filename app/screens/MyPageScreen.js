import React, { useEffect } from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";

import { color } from "../theme";
import { fetchDataFromES } from "../commons/http/ElasticSearchHelper";
import GridView from "../components/Girds/GridView";
import RoundedButton from "../components/Buttons/RoundedButton";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ProfileCard = styled.View`
  flex-direction: row;
  padding: 20px;
  background-color: #f4f4f8;
`;

const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  margin-bottom: 10px;
`;

const ProfileInfoContainer = styled.View`
  padding: 10px;
`;

const UserName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const UserGreeting = styled.Text`
  font-size: 14px;
  color: #666;
`;

const ProfileButtonGroup = styled.View`
  display: flex;
  flex-direction: row;
  padding: 4px 0px;
`;

const MyPage = ({ navigation }) => {
  const avatarImage = require("../assets/avatar.jpeg");

  // fetchESData 함수를 호출할 적절한 시점, 예를 들어 컴포넌트의 useEffect 내부나 이벤트 핸들러에서 호출합니다.
  useEffect(() => {
    console.log(1341);

    const fetchESData = async () => {
      console.log(55 + "start");
      try {
        const res = await fetchDataFromES("GET", "/test/_search");
        console.log(res); // 이제 res는 응답 데이터를 담고 있어야 합니다.
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
      console.log(123 + "es the end"); // 이 로그는 fetchDataFromES가 완료된 후 실행됩니다.
    };

    fetchESData();
  }, []);

  return (
    <Container>
      <ScrollView>
        <ProfileCard>
          <Avatar source={avatarImage} />
          <ProfileInfoContainer>
            <UserName>규라니</UserName>
            <UserGreeting>안녕하세요. 반갑습니다.</UserGreeting>
            <ProfileButtonGroup>
              <RoundedButton
                text="구독 목록"
                backgroundColor={color.gmarketGreen}
                width="75px"
                margin="0 2px 0 0"
              />
              <RoundedButton
                text="컨슈머 랭크"
                backgroundColor={color.gmarketGreen}
                width="92px"
                margin="0 2px 0 0"
              />
              <RoundedButton
                text="프로필 편집"
                backgroundColor={color.gmarketGreen}
                width="92px"
              />
            </ProfileButtonGroup>
          </ProfileInfoContainer>
        </ProfileCard>
        <GridView
          navigation={navigation}
          numColumns={3}
          images={[
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
            avatarImage,
          ]}
        />
      </ScrollView>
    </Container>
  );
};

export default MyPage;
