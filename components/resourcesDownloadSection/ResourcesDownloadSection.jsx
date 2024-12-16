"use client";

import {
  Tabs,
  Tab,
  TabPanel,
  TabScrollableContent,
  TabSwipeableContent,
} from "@eardi/react-scroll-tab";
import { useState } from "react";

function ResourcesDownloadSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Tabs variant="fullWidth" value={selectedTab} onChange={setSelectedTab}>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 4</Tab>
        <Tab>Tab 5</Tab>
        <Tab>Tab 6</Tab>
        <Tab>Tab 7</Tab>
        <Tab>Tab 8</Tab>
        <Tab>Tab 9</Tab>
      </Tabs>
      <TabSwipeableContent index={selectedTab} onChangeIndex={setSelectedTab}>
        <div>
          <h2>Tab 1 content</h2>
          <h3>
            Non do sint occaecat aliqua culpa culpa laboris tempor amet veniam
            et duis.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
        <div>
          <h2>Tab 2 content</h2>
          <h3>
            Deserunt dolore reprehenderit dolore Lorem irure fugiat do do in
            incididunt cupidatat id.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
        <div>
          <h2>Tab 3 content</h2>
          <h3>
            Velit nulla ullamco cillum labore aliquip velit pariatur
            consectetur.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
        <div>
          <h2>Tab 4 content</h2>
          <h3>
            Velit nulla ullamco cillum labore aliquip velit pariatur
            consectetur.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
        <div>
          <h2>Tab 5 content</h2>
          <h3>
            Velit nulla ullamco cillum labore aliquip velit pariatur
            consectetur.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
        <div>
          <h2>Tab 6 content</h2>
          <h3>
            Velit nulla ullamco cillum labore aliquip velit pariatur
            consectetur.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
        <div>
          <h2>Tab 7 content</h2>
          <h3>
            Velit nulla ullamco cillum labore aliquip velit pariatur
            consectetur.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
        <div>
          <h2>Tab 8 content</h2>
          <h3>
            Velit nulla ullamco cillum labore aliquip velit pariatur
            consectetur.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
        <div>
          <h2>Tab 9 content</h2>
          <h3>
            Velit nulla ullamco cillum labore aliquip velit pariatur
            consectetur.
          </h3>
          <p>
            Elit do qui excepteur reprehenderit ex irure officia pariatur. Nulla
            quis enim est deserunt irure esse veniam. Commodo enim tempor do in
            ullamco sunt ipsum. Nisi veniam minim enim laborum nostrud consequat
            qui duis incididunt non. Pariatur consectetur aliquip laboris ex
            fugiat anim nisi excepteur nisi reprehenderit anim adipisicing id.
            Exercitation eiusmod magna Lorem quis minim esse.
          </p>
        </div>
      </TabSwipeableContent>
    </>
  );
}

export default ResourcesDownloadSection;
