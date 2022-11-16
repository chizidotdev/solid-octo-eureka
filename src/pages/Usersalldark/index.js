import React from "react";

import { Column, Row, Stack, Img, Button, Text, List } from "components";
import Header1 from "components/Header/Header1";
import { useNavigate } from "react-router-dom";

const UsersalldarkPage = () => {
  const navigate = useNavigate();

  function handleNavigate51() {
    navigate("/settingsdark");
  }
  function handleNavigate63() {
    navigate("/servicesdark");
  }

  return (
    <>
      <Column className="bg-gray_900 font-poppins items-center justify-start mx-[auto] lg:pb-[206px] xl:pb-[257px] 2xl:pb-[290px] 3xl:pb-[348px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header1 className="w-[100%]" />
          <Row className="font-sora items-start justify-between lg:mt-[39px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] w-[91%]">
            <Column className="items-center justify-start lg:mt-[114px] xl:mt-[143px] 2xl:mt-[161px] 3xl:mt-[193px] w-[6%]">
              <Stack className="lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]">
                <Img src="images/img_home.svg" className="home" alt="home" />
              </Stack>
              <Button
                className="flex lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius50 w-[100%]"
                size="mdIcn"
                variant="icbFillBluegray900"
              >
                <Img
                  src="images/img_user.svg"
                  className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                  alt="user"
                />
              </Button>
              <Stack
                className="common-pointer lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                onClick={handleNavigate63}
              >
                <Img src="images/img_grid.svg" className="home" alt="grid" />
              </Stack>
              <Stack
                className="common-pointer lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] lg:w-[56px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                onClick={handleNavigate51}
              >
                <Img
                  src="images/img_settings.svg"
                  className="home"
                  alt="settings"
                />
              </Stack>
            </Column>
            <Column className="justify-start w-[89%]">
              <Column className="items-center justify-start w-[10%]">
                <Text
                  className="text-gray_500 tracking-ls1 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Users
                </Text>
              </Column>
              <Row className="font-inter items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[35%]">
                <Button
                  className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[16%]"
                  shape="CircleBorder19"
                  variant="OutlineBluegray900"
                >
                  All
                </Button>
                <Button
                  className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[25%]"
                  shape="CircleBorder19"
                  variant="OutlineBluegray900"
                >
                  Admins
                </Button>
                <Button
                  className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
                  shape="CircleBorder19"
                  variant="OutlineBluegray900"
                >
                  Users
                </Button>
                <Button
                  className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[29%]"
                  shape="CircleBorder19"
                  variant="OutlineBluegray900"
                >
                  Rhendors
                </Button>
              </Row>
              <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[99%]">
                <Row className="bg-gray_900 border-bluegray_900 border-bw091 border-solid items-start lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius1816 w-[100%]">
                  <Text
                    className="font-sora lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] text-bluegray_500 tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    #
                  </Text>
                  <Column className="font-inter items-center justify-start xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[91px] mt-[1px] p-[2px] w-[22%]">
                    <Text className="icontitle1" variant="body2">
                      NAME
                    </Text>
                  </Column>
                  <Text
                    className="font-inter xl:ml-[120px] 2xl:ml-[136px] 3xl:ml-[163px] lg:ml-[96px] mt-[1px] not-italic text-bluegray_500 w-[auto]"
                    variant="body2"
                  >
                    ROLE
                  </Text>
                  <Text
                    className="font-inter lg:ml-[132px] xl:ml-[166px] 2xl:ml-[187px] 3xl:ml-[224px] mt-[1px] not-italic text-bluegray_500 w-[auto]"
                    variant="body2"
                  >
                    JOINED
                  </Text>
                  <Text
                    className="font-inter lg:ml-[126px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] mt-[1px] not-italic text-bluegray_500 w-[auto]"
                    variant="body2"
                  >
                    ACTION
                  </Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="listone">
                    <Text className="One6" as="h6" variant="h6">
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
                          className="font-semibold text-bluegray_500 w-[auto]"
                          variant="body3"
                        >
                          Sanni Abiodun
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-inter font-normal lg:ml-[150px] xl:ml-[188px] 2xl:ml-[212px] 3xl:ml-[254px] not-italic text-bluegray_500 w-[auto]"
                      variant="body3"
                    >
                      user
                    </Text>
                    <Text
                      className="font-inter font-normal lg:ml-[111px] xl:ml-[139px] 2xl:ml-[157px] 3xl:ml-[188px] not-italic text-bluegray_500 w-[auto]"
                      variant="body3"
                    >
                      Tue, 23 jan, 2022
                    </Text>
                    <Column className="font-sora items-center xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[158px] lg:ml-[93px] w-[7%]">
                      <Button className="font-semibold xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-center text-white_A700 tracking-ls1 w-[100%]">
                        Edit
                      </Button>
                    </Column>
                  </Row>
                  <Row className="listone">
                    <Text className="One6" as="h6" variant="h6">
                      2
                    </Text>
                    <Row className="font-inter items-center justify-center xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] w-[17%]">
                      <Img
                        src="images/img_user2.png"
                        className="rounded-radius50 userOne_Two"
                        alt="userTwo"
                      />
                      <Text className="icontitle2" variant="body3">
                        Ajunwo Precious
                      </Text>
                    </Row>
                    <Text className="user_Two" variant="body3">
                      admin
                    </Text>
                    <Text
                      className="font-inter font-normal lg:ml-[108px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] not-italic text-bluegray_500 w-[auto]"
                      variant="body3"
                    >
                      Tue, 23 jan, 2022
                    </Text>
                    <Column className="font-sora items-center xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[158px] lg:ml-[93px] w-[7%]">
                      <Button className="font-semibold xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-center text-white_A700 tracking-ls1 w-[100%]">
                        Edit
                      </Button>
                    </Column>
                  </Row>
                  <Row className="listone">
                    <Text className="One6" as="h6" variant="h6">
                      3
                    </Text>
                    <Row className="font-inter items-center justify-center xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] w-[16%]">
                      <Img
                        src="images/img_user3.png"
                        className="rounded-radius50 userOne_Two"
                        alt="userThree"
                      />
                      <Column className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[58%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          variant="body3"
                        >
                          Chief Precious
                        </Text>
                      </Column>
                    </Row>
                    <Text
                      className="font-inter font-normal lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] not-italic text-bluegray_500 w-[auto]"
                      variant="body3"
                    >
                      rhendor
                    </Text>
                    <Text
                      className="font-inter font-normal lg:ml-[102px] xl:ml-[128px] 2xl:ml-[144px] 3xl:ml-[172px] not-italic text-bluegray_500 w-[auto]"
                      variant="body3"
                    >
                      Thur, 13 jan, 2022
                    </Text>
                    <Column className="font-sora items-center xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] w-[7%]">
                      <Button className="font-semibold xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-center text-white_A700 tracking-ls1 w-[100%]">
                        Edit
                      </Button>
                    </Column>
                  </Row>
                  <Row className="listone">
                    <Text className="One6" as="h6" variant="h6">
                      4
                    </Text>
                    <Row className="font-inter items-center justify-center mb-[1px] xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:ml-[91px] w-[18%]">
                      <Img
                        src="images/img_user4.png"
                        className="userOne_Two"
                        alt="userFour"
                      />
                      <Text className="icontitle2" variant="body3">
                        Odogwu Precious
                      </Text>
                    </Row>
                    <Text className="user_Two" variant="body3">
                      user
                    </Text>
                    <Text
                      className="font-inter font-normal lg:ml-[118px] xl:ml-[147px] 2xl:ml-[166px] 3xl:ml-[199px] not-italic text-bluegray_500 w-[auto]"
                      variant="body3"
                    >
                      Fri, 3 jan, 2022
                    </Text>
                    <Column className="font-sora items-center xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] lg:ml-[99px] w-[7%]">
                      <Button className="font-semibold xl:text-[11px] 2xl:text-[12px] 3xl:text-[15px] lg:text-[9px] text-center text-white_A700 tracking-ls1 w-[100%]">
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

export default UsersalldarkPage;
