import { NextPage } from "next";

import { Page } from "../../components/ui/page";

import { NewContentForm } from "./components/new-content-form";

const NewPage: NextPage = () => {
  return (
    <Page>
      <Page.Header>
        <Page.Title>New Content</Page.Title>
        <Page.Description>You know what todo...</Page.Description>
      </Page.Header>
      <Page.Content>
        <NewContentForm />
      </Page.Content>
    </Page>
  );
};

export default NewPage;
