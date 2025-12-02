import { commentaryData } from "@database/commentaryData";
import { AccountStatus, PageType } from "@libs/Types";
import StandardPage from "@pages/StandardPage";

const BibleCommentary: React.FC = () => {
  return (
    <StandardPage
      data={{
        _id: "commentary_page",
        title: "Bible Commentary",
        pageType: PageType.COMMENTARY,
        description: undefined,
        accountStatus: AccountStatus.GUEST,
        rows: commentaryData.rows,
        sidebar: [],
        needsHelp: true,
      }}
    />
  );
};

export default BibleCommentary;
