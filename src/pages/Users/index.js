import React from "react";

import { Column, Row, Stack, Img, Button, Text, Line, List } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const navigate = useNavigate();

  function handleNavigate33() {
    navigate("/edituser");
  }
  function handleNavigate34() {
    navigate("/edituser");
  }
  function handleNavigate35() {
    navigate("/edituser");
  }
  function handleNavigate36() {
    navigate("/edituser");
  }
  function handleNavigate37() {
    navigate("/services");
  }
  function handleNavigate38() {
    navigate("/settings");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center justify-start mx-[auto] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
        <Column className="justify-start lg:mb-[166px] xl:mb-[208px] 2xl:mb-[234px] 3xl:mb-[280px] w-[97%]">
          <Header className="w-[100%]" />
          <Row className="font-sora items-start lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[93%]">
            <Column className="items-center justify-start lg:mt-[114px] xl:mt-[143px] 2xl:mt-[161px] 3xl:mt-[193px] w-[6%]">
              <Stack className="lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                <Img src="images/img_home.svg" className="home" alt="home" />
              </Stack>
              <Button
                className="flex lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius50 w-[100%]"
                size="mdIcn"
                variant="icbFillIndigo50"
              >
                <Img
                  src="images/img_user.svg"
                  className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                  alt="user"
                />
              </Button>
              <Stack
                className="common-pointer lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                onClick={handleNavigate37}
              >
                <Img src="images/img_grid.svg" className="home" alt="grid" />
              </Stack>
              <Stack
                className="common-pointer lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                onClick={handleNavigate38}
              >
                <Img
                  src="images/img_settings.svg"
                  className="home"
                  alt="settings"
                />
              </Stack>
            </Column>
            <Column className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[93%]">
              <Column className="items-center justify-start w-[10%]">
                <Text
                  className="text-gray_901 tracking-ls1 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Users
                </Text>
              </Column>
              <Row className="font-inter items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[36%]">
                <Button
                  className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[16%]"
                  shape="CircleBorder19"
                  variant="OutlineIndigo50"
                >
                  All
                </Button>
                <Button
                  className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[25%]"
                  shape="CircleBorder19"
                  variant="OutlineIndigo50"
                >
                  Admins
                </Button>
                <Button
                  className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-white_A700 w-[23%]"
                  shape="CircleBorder19"
                >
                  Users
                </Button>
                <Button
                  className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[29%]"
                  shape="CircleBorder19"
                  variant="OutlineIndigo50"
                >
                  Rhendors
                </Button>
              </Row>
              <Line className="bg-gray-300 h-[0.92px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[97%]" />
              <Column className="items-center justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[99%]">
                <Row className="bg-white_A700 items-start lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius1816 w-[100%]">
                  <Text
                    className="font-sora lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] text-gray_901 tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    #
                  </Text>
                  <Column className="font-inter items-center justify-start mb-[1px] xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[91px] p-[2px] w-[22%]">
                    <Text className="icontitle" variant="body2">
                      NAME
                    </Text>
                  </Column>
                  <Text
                    className="font-inter xl:ml-[120px] 2xl:ml-[136px] 3xl:ml-[163px] lg:ml-[96px] not-italic text-bluegray_700 w-[auto]"
                    variant="body2"
                  >
                    ROLE
                  </Text>
                  <Text
                    className="font-inter lg:ml-[132px] xl:ml-[166px] 2xl:ml-[187px] 3xl:ml-[224px] not-italic text-bluegray_700 w-[auto]"
                    variant="body2"
                  >
                    JOINED
                  </Text>
                  <Text
                    className="font-inter lg:ml-[126px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] not-italic text-bluegray_700 w-[auto]"
                    variant="body2"
                  >
                    ACTION
                  </Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="users">
                    <Text className="One_Two" as="h6" variant="h6">
                      1
                    </Text>
                    <Row className="font-inter items-center justify-center xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] w-[16%]">
                      <Stack className="border-bw091 border-gray_300 border-solid rounded-radius50 userOne_Two">
                        <Img
                          src="images/img_user1.png"
                          className="userOne"
                          alt="userOne"
                        />
                      </Stack>
                      <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[57%]">
                        <Text
                          className="font-semibold text-gray_901 w-[auto]"
                          variant="body3"
                        >
                          Sanni Abiodun
                        </Text>
                      </Column>
                    </Row>
                    <Text className="user_One" variant="body3">
                      user
                    </Text>
                    <Text className="Tue23janTwenty" variant="body3">
                      Tue, 23 jan, 2022
                    </Text>
                    <Column className="font-sora items-center xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[158px] lg:ml-[93px] w-[7%]">
                      <Button
                        className="common-pointer font-semibold xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-center tracking-ls1 w-[100%]"
                        onClick={handleNavigate33}
                        variant="FillBlueA700"
                      >
                        Edit
                      </Button>
                    </Column>
                  </Row>
                  <Row className="users">
                    <Text className="One_Two" as="h6" variant="h6">
                      1
                    </Text>
                    <Row className="font-inter items-center justify-center xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] w-[16%]">
                      <Stack className="border-bw091 border-gray_300 border-solid rounded-radius50 userOne_Two">
                        <Img
                          src="images/img_user1.png"
                          className="userOne"
                          alt="userOne One"
                        />
                      </Stack>
                      <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[57%]">
                        <Text
                          className="font-semibold text-gray_901 w-[auto]"
                          variant="body3"
                        >
                          Sanni Abiodun
                        </Text>
                      </Column>
                    </Row>
                    <Text className="user_One" variant="body3">
                      user
                    </Text>
                    <Text className="Tue23janTwenty" variant="body3">
                      Tue, 23 jan, 2022
                    </Text>
                    <Column className="font-sora items-center xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[158px] lg:ml-[93px] w-[7%]">
                      <Button
                        className="common-pointer font-semibold xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-center tracking-ls1 w-[100%]"
                        onClick={handleNavigate34}
                        variant="FillBlueA700"
                      >
                        Edit
                      </Button>
                    </Column>
                  </Row>
                  <Row className="users">
                    <Text className="One_Two" as="h6" variant="h6">
                      1
                    </Text>
                    <Row className="font-inter items-center justify-center xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] w-[16%]">
                      <Img
                        src="images/img_user1.png"
                        className="userOne_Two"
                        alt="userOne Two"
                      />
                      <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[57%]">
                        <Text
                          className="font-semibold text-gray_901 w-[auto]"
                          variant="body3"
                        >
                          Sanni Abiodun
                        </Text>
                      </Column>
                    </Row>
                    <Text className="user_One" variant="body3">
                      user
                    </Text>
                    <Text className="Tue23janTwenty" variant="body3">
                      Tue, 23 jan, 2022
                    </Text>
                    <Column className="font-sora items-center xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[158px] lg:ml-[93px] w-[7%]">
                      <Button
                        className="common-pointer font-semibold xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-center tracking-ls1 w-[100%]"
                        onClick={handleNavigate35}
                        variant="FillBlueA700"
                      >
                        Edit
                      </Button>
                    </Column>
                  </Row>
                  <Row className="users">
                    <Text className="One_Two" as="h6" variant="h6">
                      1
                    </Text>
                    <Row className="font-inter items-center justify-center xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[160px] lg:ml-[95px] w-[16%]">
                      <Img
                        src="images/img_user1.png"
                        className="userOne_Two"
                        alt="userOne Three"
                      />
                      <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[57%]">
                        <Text
                          className="font-semibold text-gray_901 w-[auto]"
                          variant="body3"
                        >
                          Sanni Abiodun
                        </Text>
                      </Column>
                    </Row>
                    <Text className="user_One" variant="body3">
                      user
                    </Text>
                    <Text className="Tue23janTwenty" variant="body3">
                      Tue, 23 jan, 2022
                    </Text>
                    <Column className="font-sora items-center xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[158px] lg:ml-[93px] w-[7%]">
                      <Button
                        className="common-pointer font-semibold xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-center tracking-ls1 w-[100%]"
                        onClick={handleNavigate36}
                        variant="FillBlueA700"
                      >
                        Edit
                      </Button>
                    </Column>
                  </Row>
                </List>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default UsersPage;
