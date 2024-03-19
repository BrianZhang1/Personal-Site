FROM fluent/fluentd:edge-debian

USER root
RUN gem install fluent-plugin-prometheus

USER fluent
ENTRYPOINT ["tini",  "--", "/bin/entrypoint.sh"]
CMD ["fluentd"]