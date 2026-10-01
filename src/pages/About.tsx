import { PageType } from "@libs/Types";
import PageTemplate from "@pages/PageTemplate";
import { DefaultIcon as LogoImage } from "@libs/Icons";
import styled from "@emotion/styled";
import {
  Paragraph,
  RowHeading,
  Title,
  Caption,
  Bullet,
} from "@libs/Typography";
import { breakpoints } from "@libs/globals";
import logo from "@assets/logos/logo.svg?react";

const ContentBackground = styled.div`
  text-align: center;
  margin-top: -120px;
  width: 100vw;
  min-height: 100vh;
`;
const Heading = styled.div`
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Text = styled.div`
  text-align: justify;
  width: 60vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ParagraphWithImage = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 20px;

  @media (max-width: ${breakpoints.sm}px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
  }
`;
const ImageWithCaption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TableOfContents = styled.div`
  position: sticky;
  top: 20px;
  left: 20px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: baseline;
  align-self: start;

  @media (max-width: ${breakpoints.sm}px) {
    display: none;
  }
`;

const Anchor = styled.a`
  color: white;
`;
const BulletedList = styled.ul`
  padding: 0 0 0 20px;
  margin-top: -7px;
`;
const SubBulletedList = styled.ul`
  padding: 0 0 0 30px;
`;

const QAndA = styled.div``;
const QContainer = styled.div``;
const Question = styled(Paragraph)`
  font-style: italic;
  font-weight: 800;
  margin-bottom: 5px;
`;
const Answer = styled(Paragraph)`
  margin-top: 0;
`;

const AboutPage = () => {
  return (
    <PageTemplate pageType={PageType.ABOUT}>
      <TableOfContents>
        <Anchor href="#intro">Introduction</Anchor>
        <Anchor href="#about-me">About Me</Anchor>
        <Anchor href="#why-solomon">Why Solomon?</Anchor>
        <Anchor href="#my-beliefs">My Beliefs</Anchor>
        <Anchor href="#qAndA">Q&A</Anchor>
        <Anchor href="#future">The Future</Anchor>
        <Anchor href="#conclusion">Conclusion</Anchor>
      </TableOfContents>
      <ContentBackground>
        <Heading>
          <Title>About Solomon</Title>
          <LogoImage icon={logo} width="200px" height="50px" />
        </Heading>
        <Content>
          <Text>
            <Section id="intro">
              <RowHeading noMargin>Introduction</RowHeading>
              <Paragraph>
                Hello! As a Christian, I want to make sure that transparency,
                both about Solomon and myself, is in the background of this
                project. My goal of Solomon is not for the website itself to be
                the focus, but rather I wish that the Lord is glorified through
                the fruit produced by the resources compiled on Solomon. I built
                Solomon to be for any Christian, new or old, in addition to
                those curious about Christianity or just exploring the faith,
                maybe for the first time.
              </Paragraph>
              <Paragraph>
                I prayed and reflected a lot about even adding this page to
                Solomon. I felt it would be too self-indulgent, and again I
                wanted Solomon itself to fade into the background, with myself
                being completely invisible to you. However I felt compelled to
                add this because of my principle of transparency. I want Solomon
                to feel more personal to you, and I want to let you know that
                I'm really just one guy who made this. No team. No company. No
                vibe coding. Everything was designed from the ground up with the
                Kingdom of God as my focus. As much as I've tried to remove my
                own beliefs from influencing this project, I am still a sinful
                human being, and subject to my own biases.
              </Paragraph>
              <Paragraph>
                I had to ask a lot of questions when creating Solomon: How would
                sources be vetted? Which controversial issues of Christianity
                would I have to draw a line on versus just presenting multiple
                sides? Who is the intended audience of Solomon? Would I
                prioritize any branch, denomination, or group of Christianity?
                Which of these groups are even Christian? All of these were
                really hard questions that I spent time praying on, and if I'm
                being honest, I still don't have all the answers perfectly
                outlined. However, I do know that I'm trying my best despite my
                sinfulness, and I really hope for grace as I work on this
                process myself. I'll give you my answers to all of these
                questions below.
              </Paragraph>
            </Section>
            <Section id="about-me">
              <RowHeading noMargin>About Me</RowHeading>
              <ParagraphWithImage>
                <Paragraph>
                  Now, a little about me and my testimony. I'm a Christian from
                  Los Angeles, California, who now lives in Boston,
                  Massachusetts. While I grew up in a wonderful Christian
                  household and was brought up with Christian values, I really
                  was a nominal Christian, or a Christian in name only. When I
                  was brought to Boston to attend Northeastern University for my
                  undergraduate degree, everything about my spiritual life
                  changed. I grew to lean on God a lot more during my time in
                  college, and I would eventually join Cru and truly experience
                  a godly Christian community. I became interested in theology
                  and apologetics from one of my closest roommates, and we would
                  stay up late talking theology for hours. I would go on to
                  graduate from Northeastern University with a degree in
                  Computer Science and Interaction Design, along with a Minor in
                  History. I attend a non-denominational church in the Greater
                  Boston area.
                </Paragraph>
                <ImageWithCaption>
                  <img
                    src="/assets/misc/me.png"
                    alt="me"
                    width="100%"
                    style={{ borderRadius: "8px" }}
                  />
                  <Caption>Hello! I'm Charlie</Caption>
                </ImageWithCaption>
              </ParagraphWithImage>
            </Section>
            <Section id="why-solomon">
              <RowHeading>Why Create Solomon?</RowHeading>
              <Paragraph>
                I created Solomon because I noticed a true problem with
                Christian apologetics and theology. While the resources are
                amazing, access is a big issue. How do you know which resources
                to trust? How do you even go about finding these sources? I was
                blessed to have an amazing roommate who gave me access to
                wonderful Christian resources, but not everyone has this option.
                When doing research for Solomon, many Christians expressed
                frustration at finding theologically-sound resources. It is
                difficult to even know what to search up, and even if something
                is found it can be difficult to truly know the author's own
                biases and theological background without doing further
                research. Solomon is intended to combat this as a Christian
                resource aggregator that provides verified, trusted resources to
                you.
              </Paragraph>
            </Section>
            <Section id="my-beliefs">
              <RowHeading>My Beliefs</RowHeading>
              <Paragraph>
                With that, here are some of my beliefs about Christianity. This
                is not intended to be a comprehensive list, and this focuses on
                issues I am mostly uncompromising about.
              </Paragraph>
              <BulletedList>
                <Bullet>
                  There is one God in the three persons of the Trinity, who is
                  Love, Truth, Justice, and Mercy (1 John 4:7-21)
                </Bullet>
                <Bullet>
                  Mankind has sinned and fallen short of the glory of God
                  (Romans 3:23)
                </Bullet>
                <Bullet>
                  Jesus Christ is the second person of the Trinity. He, being
                  fully God and fully man, came down to Earth, was crucified,
                  died, and resurrected to atone for the sins of all mankind to
                  reconcile us to God (2 Corinthians 5:21)
                </Bullet>
                <Bullet>
                  I affirm the historic creeds of the Church, including the
                  Nicene Creed, Athanasian Creed, and Apostles Creed
                </Bullet>
                <Bullet>
                  I am a non-denominational Protestant with Baptist-leaning
                  beliefs. This has the following implications:
                  <SubBulletedList>
                    <Bullet>
                      I affirm the five solas of the Protestant tradition
                    </Bullet>
                    <Bullet>
                      I am a strong believer in the ability of the Church to
                      reform according to historic, orthodox Christian values
                      and teachings
                    </Bullet>
                  </SubBulletedList>
                </Bullet>
              </BulletedList>
              <Paragraph>Why did I tell you all of this?</Paragraph>
              <Paragraph>
                I think its important to put responsibility on myself for any
                issues or inaccuracies that arise within Solomon. Most of the
                list above are lines I draw when it comes to adding resources to
                Solomon. However, I wanted to take some time to answer the
                questions I posed earlier, which I hope can help you understand
                Solomon more deeply.
              </Paragraph>
              <Section id="qAndA">
                <RowHeading noMargin>Q&A</RowHeading>
                <QAndA>
                  <QContainer>
                    <Question>1. How are sources vetted?</Question>
                    <Answer>
                      &#8594; Currently, I am the only one vetting resources. I
                      really don’t want to be the sole authority for this, as I
                      am not infallible and subject to my personal biases. It is
                      more of a temporary concession until Solomon is fully
                      ready for launch.
                    </Answer>
                  </QContainer>
                </QAndA>
              </Section>
            </Section>
            <Section id="future">
              <RowHeading noMargin>The Future</RowHeading>
              <Paragraph>
                I have many future plans for Solomon. I really do want this to
                be a long-term project that I can focus my time on. While I will
                (God-willing!) have a full-time job in Software Engineering
                during this time, I still plan to work on Solomon whenever I
                can. Here is a list of some features I am really excited about!
                It's important to note that I don't have a particular timeline
                on actually implementing these, but will hopefully chip them off
                piecemeal.
              </Paragraph>
            </Section>
            <Section id="conclusion">
              <RowHeading noMargin>Conclusion</RowHeading>
              <Paragraph>
                I apologize sincerely for this being so long. I felt you all
                deserved to know the truth about Solomon, why I created it, and
                who I am. If this causes you to stop using Solomon, I completely
                understand, and may the Lord bless you and be with you forever
                (Numbers 6:24-26). Otherwise, I hope Solomon can be fruitful to
                the Kingdom. All glory be to God forever and ever! - Charlie
              </Paragraph>
            </Section>
          </Text>
        </Content>
      </ContentBackground>
    </PageTemplate>
  );
};

export default AboutPage;
