import React, { Component } from "react";
import { Editor } from "../components";
import {
  Segment,
  Grid,
  Menu,
  Label,
  Icon,
  Accordion,
  Input,
  Button,
  Card
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Grid columns={3} divided inverted padded>
        <Grid.Row style={{ height: "100vh" }}>
          <Grid.Column width={2}>
            <Menu size="small" icon inverted vertical>
              <Menu.Item>
                <Icon name="code" />
                SNIPPETO
              </Menu.Item>
            </Menu>
            <Menu size="small" vertical inverted pointing>
              <Menu.Item name="Snippets">
                <Accordion inverted>
                  <Accordion.Title>
                    <Icon name="angle right" />
                    Snippets
                  </Accordion.Title>
                  <Accordion.Content active>
                    <Menu.Item name="pinned">
                      <Label color="blue">51</Label>
                      <Icon name="map pin" />
                      Pinned
                    </Menu.Item>
                    <Menu.Item name="today">
                      <Label color="teal">51</Label>
                      <Icon name="calendar alternate" />
                      Today
                    </Menu.Item>
                  </Accordion.Content>
                </Accordion>
              </Menu.Item>

              <Menu.Item name="spam">
                <Label>51</Label>
                <Icon name="trash alternate" />
                Trash
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={3} style={{ padding: 0 }}>
            <Menu inverted vertical style={{ width: "100%", margin: 0 }}>
              <Menu.Item
                name="search"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  margin: 0
                }}
              >
                <Input placeholder="Search..." size="small" />
                <Button style={{ marginLeft: "10px" }} size="large" secondary>
                  <Icon
                    name="edit outline"
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                  />
                </Button>
              </Menu.Item>
            </Menu>
            <Segment.Group>
              <Segment inverted>hello</Segment>
              <Segment inverted>
                hello
                <Label color="grey">
                  <Label.Detail>Adrienne</Label.Detail>
                </Label>
                <Label color="grey">Zoe</Label>
                <Label color="grey">Nan</Label>
              </Segment>
              <Segment inverted> hello </Segment>
              <Segment inverted> hello </Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width={11}>
            <Segment inverted>
              <Editor />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
