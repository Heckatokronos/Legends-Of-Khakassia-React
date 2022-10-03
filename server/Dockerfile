# syntax=docker/dockerfile:1
FROM ruby:3.1.2
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /server
COPY Gemfile /server/Gemfile
COPY Gemfile.lock /server/Gemfile.lock
RUN bundle install

# start prepared json product things
RUN rails db:seed

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]

# This file should contain all the record creation needed to seed the database with its default values.
RUN rails db:seed
