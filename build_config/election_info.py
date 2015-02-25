from popit_api import PopIt
import logging
import yaml

logging.basicConfig(level=logging.DEBUG)

# Obtain config
with open('config.yaml', 'r') as yamlfile:
  yaml_string = yamlfile.read()
  tureso_config = yaml.load(yaml_string)

  # Get what we need out of it.
  ORGANIZATION_ID = tureso_config['organization_id']
  election_config = tureso_config['election_info']
  popit_info = tureso_config['popit_info']


api = PopIt(**popit_info)

organization = api.organizations(ORGANIZATION_ID).get()['result']

# Deleting this because the PopIt UI somehow can save invalid dissolution_date
del organization['dissolution_date']

organization['next_election'] = election_config

try:
  api.organizations(ORGANIZATION_ID).put(organization)
except Exception as e:
  print(e.content)
  raise e
