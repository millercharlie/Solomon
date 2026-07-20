import { PageType } from "@libs/Types";
import PageTemplate from "@pages/PageTemplate";
import styled from "@emotion/styled";
import { Paragraph, RowHeading, Title } from "@libs/Typography";

const ContentBackground = styled.div`
  text-align: center;
  margin-top: 30px;
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

const AboutPage = () => {
  return (
    <PageTemplate pageType={PageType.ABOUT}>
      <ContentBackground>
        <Heading>
          <Title>About Solomon</Title>
        </Heading>
        <Content>
          <Text>
            <Paragraph>
              Hello! As a Christian, I want to make sure that transparency, both
              about Solomon and myself, is in the background of this project. My
              goal of Solomon is not for the website itself to be the focus, but
              rather I wish that the Lord is glorified through the fruit
              produced by the resources compiled on Solomon. I built Solomon to
              be for any Christian, new or old, in addition to those curious
              about Christianity or just exploring the faith, maybe for the
              first time.
            </Paragraph>
            <Paragraph>
              I prayed and reflected a lot about even adding this page to
              Solomon. I felt it would be too self-indulgent, and again I wanted
              Solomon itself to fade into the background, with myself being
              completely invisible to you. However I felt compelled to add this
              because of my principle of transparency. I want Solomon to feel
              more personal to you, and I want to let you know that I'm really
              just one guy who made this. No AI. No team. No company. Everything
              was designed from the ground up with the Kingdom of God as my
              focus. As much as I've tried to remove my own beliefs from
              influencing this project, I am still a sinful human being, and
              subject to my own biases.
            </Paragraph>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "4fr 1fr",
                gap: "10px",
              }}
            >
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
              <img src="me.jpg" alt="me" height="120px" />
            </div>
            <Paragraph>
              I created Solomon because I noticed a true problem with Christian
              apologetics and theology. While the resources are amazing, access
              is a big issue. How do you know which resources to trust? How do
              you even go about finding these sources? I was blessed to have an
              amazing roommate who gave me access to wonderful Christian
              resources, but not everyone has this option. When doing research
              for Solomon, many Christians expressed frustration at finding
              theologically-sound resources. It is difficult to even know what
              to search up, and even if something is found it can be difficult
              to truly know the author's own biases and theological background
              without doing further research. Solomon is intended to combat this
              as a Christian resource aggregator that provides verified, trusted
              resources to you.
            </Paragraph>
            <Paragraph>
              With that, here are some of my beliefs about Christianity. This is
              not intended to be a comprehensive list, and this focuses on
              issues I am mostly uncompromising about. TODO BULLETS + TITLES
            </Paragraph>
            <Paragraph>Why did I tell you all of this?</Paragraph>
            <Paragraph>
              I think its important to put responsibility on myself for any
              issues or inaccuracies that arise within Solomon. Most of the list
              above are lines I draw when it comes to adding resources to
              Solomon. However, I wanted to take some time to answer the
              questions I posed earlier, which I hope can help you understand
              Solomon more deeply.
            </Paragraph>
            <Section>
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
            <Section>
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
