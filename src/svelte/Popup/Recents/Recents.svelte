<script>
  import {
    ListGroup,
    ListGroupItem,
    Collapse,
    Button,
    Card,
    Row,
    Col,
  } from "sveltestrap";
  import { TrashIcon, Volume1Icon } from "svelte-feather-icons";
  /*--------*/
  let history = [
    {
      title: "Lorem",
      snippet: "Culpa cillum do officia ut ullamco velit veniam.",
    },
    {
      title: "Ipsum",
      snippet:
        "Sit ex sint deserunt aliquip do ut eiusmod dolor labore aliquip.",
    },
    { title: "Delorem", snippet: "Eu cupidatat fugiat mollit." },
  ];
</script>

<ListGroup>
  {#each history as { title, snippet }, i}
    <ListGroupItem>
      <Button color="primary" id="toggler{i + 1}" class="mb-3"
        >{i + 1}: {title} (Toggle preview)</Button
      >
      <Collapse toggler="#toggler{i + 1}">
        <Card body>
          <Row>
            <Col xs={{ size: "auto", offset: 0 }}>{snippet}</Col>
            <Col xs={{ size: "1", offset: 1 }}>
              <Button size="sm" color="light">
                <TrashIcon size="1x" class="red" />
              </Button>
            </Col>
            <Col xs={{ size: "1", offset: 1 }}>
              <Button size="sm" color="light"
                ><Volume1Icon size="1x" class="light" /></Button
              >
            </Col>
          </Row></Card
        >
      </Collapse>
    </ListGroupItem>
  {/each}
</ListGroup>

<style>
</style>
