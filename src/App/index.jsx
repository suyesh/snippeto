import React, { Component } from "react";
import { Editor, SiteContainer, Column, Brand } from "../components";
import { Menu, Label, Icon, Input, Button, Card } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <SiteContainer>
        <Column width={2}>
          <Brand name="SNIPPETO" />
          <Menu size="small" vertical inverted pointing>
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

            <Menu.Item name="spam">
              <Label>51</Label>
              <Icon name="trash alternate" />
              Trash
            </Menu.Item>
          </Menu>
        </Column>
        <Column width={4}>
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

          <Card style={{ width: "100%" }} inverted>
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label as="a">Mail</Label>
              <Label as="a">Mail</Label>
              <Label as="a">Mail</Label>
              <Label as="a">Mail</Label>
            </Card.Content>
          </Card>

          <Card style={{ width: "100%" }} inverted>
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label as="a">Mail</Label>
              <Label as="a">Mail</Label>
              <Label as="a">Mail</Label>
              <Label as="a">Mail</Label>
            </Card.Content>
          </Card>

          <Card style={{ width: "100%" }} inverted>
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label as="a">Mail</Label>
              <Label as="a">Mail</Label>
              <Label as="a">Mail</Label>
              <Label as="a">Mail</Label>
            </Card.Content>
          </Card>
        </Column>
        <Column width={10}>
          <Editor />
        </Column>
      </SiteContainer>
    );
  }
}

export default App;
