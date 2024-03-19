FROM fluent/fluentd:edge-debian

USER root
RUN gem install fluent-plugin-prometheus
RUN mkdir -p /tmp/fluentd
RUN chmod 744 /tmp/fluentd
RUN chown -R fluent /tmp/fluentd

USER fluent
ENTRYPOINT ["tini",  "--", "/bin/entrypoint.sh"]
CMD ["fluentd"]