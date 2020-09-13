#########################################################################################################
# @FileName: locustfile.py
# @Descritpion: A simple program to swarm the requests onto a sepcific url using locust.
# @Author: Deepthi Warrier Edakunni
# @Date: 10-June-2020
#########################################################################################################

import random
from locust import HttpUser, task, between

# This method is called at the start of the server on port 8089
class QuickstartUser(HttpUser):
    # Wait time between each request
    wait_time = between(5, 9)

    # /api/users is appended to the url given in the locust UI/Dashboard and swarmed with requests.
    @task
    def index_page(self):
        self.client.get("/api/users")
   
#########################################################################################################